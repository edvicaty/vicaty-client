import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {} from "@ant-design/icons";
import { Form, Spin } from "antd";
import {
  viewProject,
  createModel,
  deleteCreatedModel,
  editModel,
} from "../services/backend";
import { Context } from "../context";
import LoadingModal from "../components/LoadingModal";
import CreateModelFormModal from "../components/Projects/CreateModelFormModal";
import UpdateModelFormModal from "../components/Projects/UpdateModelFormModal";
import DeleteModelFormModal from "../components/Projects/DeleteModelFormModal";
import ModelsHeader from "../components/Projects/ModelsHeader";
import ModelsBody from "../components/Projects/ModelsBody";

const Project = (props) => {
  const { user } = useContext(Context);
  const [project, setProject] = useState(null);
  const [form] = Form.useForm();
  const [updateModelForm] = Form.useForm();
  const [fetchedProject, setFetchedProject] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modelDeleteModal, setModelDeleteModal] = useState(false);
  const [modelToDelete, setModelToDelete] = useState(null);
  const [modelUpdateModal, setModelUpdateModal] = useState(false);
  const [modelToUpdate, setModelToUpdate] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  //load data functions ----------------------------------------------------------------------------------
  useEffect(() => {
    const getProject = async () => {
      await handleLoadingModalTrue();
      const { data } = await viewProject(props.match.params.projectId);
      setProject(data);
      await handleLoadingModalFalse();
      if (fetchedProject === false) {
        setFetchedProject(true);
      }
    };
    getProject();
  }, [fetchedProject]);

  //Create Model functions ----------------------------------------------------------------------------------
  async function onFinish({ createdModelName, description }) {
    await handleLoadingModalTrue();
    await createModel(
      createdModelName,
      props.match.params.projectId,
      description
    );
    await handleLoadingModalFalse();
    setFetchedProject(false);
    handleModal();
  }

  function handleModal() {
    setModalState(!modalState);
  }
  //Delete Model functions ----------------------------------------------------------------------------------

  function handleDeleteModal() {
    setModelDeleteModal(!modelDeleteModal);
  }
  function setModelF(modelId) {
    setModelToDelete(modelId);
  }
  async function deleteModelConfirmed() {
    await handleLoadingModalTrue();
    await deleteCreatedModel(modelToDelete);
    await handleLoadingModalFalse();
    setFetchedProject(false);
    handleDeleteModal();
  }
  //Update Model functions ----------------------------------------------------------------------------------

  function setModelToUpdateF(modelName, modelId, description) {
    setModelToUpdate({
      modelName: modelName,
      modelId: modelId,
      description: description,
    });
  }
  function handleModelUpdateModal() {
    setModelUpdateModal(!modelUpdateModal);
    updateModelForm.resetFields();
  }
  async function onFinishUpdate(values) {
    await handleLoadingModalTrue();
    await editModel(
      modelToUpdate.modelId,
      values.modelName,
      values.description
    );
    await handleLoadingModalFalse();

    updateModelForm.resetFields();
    handleModelUpdateModal();
    setFetchedProject(false);
  }

  //loading modal --------------------------------------------------------------------------------------
  async function handleLoadingModalTrue() {
    await setLoadingModal(true);
  }
  async function handleLoadingModalFalse() {
    await setLoadingModal(false);
  }

  return user ? (
    project ? (
      <div>
        <center>
          <LoadingModal
            loadingModal={loadingModal}
            handleLoadingModalFalse={handleLoadingModalFalse}
          />
          <CreateModelFormModal
            modalState={modalState}
            handleModal={handleModal}
            form={form}
            onFinish={onFinish}
            loadingModal={loadingModal}
          />
          <UpdateModelFormModal
            modelUpdateModal={modelUpdateModal}
            handleModelUpdateModal={handleModelUpdateModal}
            updateModelForm={updateModelForm}
            onFinishUpdate={onFinishUpdate}
            modelToUpdate={modelToUpdate}
            loadingModal={loadingModal}
          />
          <DeleteModelFormModal
            modelDeleteModal={modelDeleteModal}
            handleDeleteModal={handleDeleteModal}
            deleteModelConfirmed={deleteModelConfirmed}
            loadingModal={loadingModal}
          />
          <ModelsHeader props={props} handleModal={handleModal} />
          <ModelsBody
            project={project}
            updateModelForm={updateModelForm}
            setModelToUpdateF={setModelToUpdateF}
            handleModelUpdateModal={handleModelUpdateModal}
            props={props}
            loadingModal={loadingModal}
            setModelF={setModelF}
            handleDeleteModal={handleDeleteModal}
          />
        </center>
      </div>
    ) : (
      <p style={{ textAlign: "center", fontSize: "3rem" }}>
        Loading... <Spin size="large" />{" "}
      </p>
    )
  ) : (
    <Redirect to="/" />
  );
};

export default Project;
