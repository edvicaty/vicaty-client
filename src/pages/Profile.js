import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "antd";
import {
  viewProjects,
  createProject,
  deleteProject,
  editProject,
  duplicateProject,
} from "../services/backend";
import { Context } from "../context";
import LoadingModal from "../components/LoadingModal";
import CreateProjectFormModal from "../components/Profile/CreateProjectFormModal";
import UpdateProjectFormModal from "../components/Profile/UpdateProjectFormModal";
import DuplicateProjectFormModal from "../components/Profile/DuplicateProjectFormModal";
import DeleteProjectFormModal from "../components/Profile/DeleteProjectFormModal";
import ProjectsHeader from "../components/Profile/ProjectsHeader";
import ProjectsBody from "../components/Profile/ProjectsBody";

const Profile = () => {
  const { user } = useContext(Context);
  const [projects, setProjects] = useState(null);
  const [fetchedProjects, setFetchedProjects] = useState(false);
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const [duplicateForm] = Form.useForm();
  const [modalState, setModalState] = useState(false);
  const [projectDeleteModal, setProjectDeleteModal] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [projectToUpdate, setProjectToUpdate] = useState(`null`);
  const [duplicationModalState, setDuplicationModalState] = useState(false);
  const [projectToDuplicate, setProjectToDuplicate] = useState(`null`);
  const [loadingModal, setLoadingModal] = useState(false);

  //load data function -----------------------------------------------------------------------------------
  useEffect(() => {
    const getProjects = async () => {
      await handleLoadingModalTrue();

      const { data } = await viewProjects();
      setProjects(data);
      await handleLoadingModalFalse();

      if (fetchedProjects === false) {
        setFetchedProjects(true);
      }
    };
    getProjects();
  }, [fetchedProjects]);
  //Create Project functions -----------------------------------------------------------------------------------
  async function onFinish(values) {
    await handleLoadingModalTrue();

    await createProject(values);
    await handleLoadingModalFalse();

    setFetchedProjects(false);
    form.resetFields();
    handleModal();
  }

  function handleModal() {
    setModalState(!modalState);
  }
  //Delete Project functions -----------------------------------------------------------------------------------

  function handleDeleteProject() {
    setProjectDeleteModal(!projectDeleteModal);
  }
  function setProjectF(projectId) {
    setProjectToDelete(projectId);
  }
  async function deleteProjectConfirmed() {
    await handleLoadingModalTrue();

    await deleteProject(projectToDelete);
    await handleLoadingModalFalse();

    setFetchedProjects(false);
    handleDeleteProject();
  }

  //Update Project functions -----------------------------------------------------------------------------------

  function setProjectToUpdateF(projectName, projectId) {
    setProjectToUpdate({ projectName: projectName, projectId: projectId });
  }
  function handleUpdateModal() {
    setUpdateModalState(!updateModalState);
    updateForm.resetFields();
  }
  async function onFinishUpdate(values) {
    await handleLoadingModalTrue();

    await editProject(projectToUpdate.projectId, values.projectName);
    await handleLoadingModalFalse();

    updateForm.resetFields();
    handleUpdateModal();
    setFetchedProjects(false);
  }

  //duplication functions -----------------------------------------------------------------------------------
  function setProjectToDuplicateF(projectName, projectId) {
    setProjectToDuplicate({ projectName: projectName, projectId: projectId });
  }

  function handleDuplicationModal() {
    setDuplicationModalState(!duplicationModalState);
    duplicateForm.resetFields();
  }

  async function onFinishDuplication(values) {
    await handleLoadingModalTrue();

    await duplicateProject(projectToDuplicate.projectId, values.projectName);
    await handleLoadingModalFalse();

    duplicateForm.resetFields();
    handleDuplicationModal();
    setFetchedProjects(false);
  }
  //loading modal -----------------------------------------------------------------------------------
  async function handleLoadingModalTrue() {
    await setLoadingModal(true);
  }
  async function handleLoadingModalFalse() {
    await setLoadingModal(false);
  }

  return user ? (
    <div>
      <center>
        <LoadingModal
          loadingModal={loadingModal}
          handleLoadingModalFalse={handleLoadingModalFalse}
        />
        <CreateProjectFormModal
          modalState={modalState}
          handleModal={handleModal}
          form={form}
          onFinish={onFinish}
          loadingModal={loadingModal}
        />
        <UpdateProjectFormModal
          updateModalState={updateModalState}
          handleUpdateModal={handleUpdateModal}
          updateForm={updateForm}
          onFinishUpdate={onFinishUpdate}
          projectToUpdate={projectToUpdate}
          loadingModal={loadingModal}
        />
        <DuplicateProjectFormModal
          projectToDuplicate={projectToDuplicate}
          duplicationModalState={duplicationModalState}
          handleDuplicationModal={handleDuplicationModal}
          duplicateForm={duplicateForm}
          onFinishDuplication={onFinishDuplication}
          loadingModal={loadingModal}
        />
        <DeleteProjectFormModal
          projectDeleteModal={projectDeleteModal}
          handleDeleteProject={handleDeleteProject}
          deleteProjectConfirmed={deleteProjectConfirmed}
          loadingModal={loadingModal}
        />
        <ProjectsHeader user={user} handleModal={handleModal} />
        <ProjectsBody
          projects={projects}
          updateForm={updateForm}
          setProjectToUpdateF={setProjectToUpdateF}
          handleUpdateModal={handleUpdateModal}
          duplicateForm={duplicateForm}
          setProjectToDuplicateF={setProjectToDuplicateF}
          handleDuplicationModal={handleDuplicationModal}
          setProjectF={setProjectF}
          handleDeleteProject={handleDeleteProject}
        />
      </center>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
