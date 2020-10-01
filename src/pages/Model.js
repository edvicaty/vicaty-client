import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Form, notification, Spin } from "antd";
import { viewModel } from "../services/backend";
import {
  addSingle,
  createElement,
  deleteSingleData,
  updateSingle,
  deleteElement,
} from "../services/api";
import { Context } from "../context";
import LoadingModal from "../components/LoadingModal";
import CreateElementFormModal from "../components/Models/CreateElementFormModal";
import ElementsHeader from "../components/Models/ElementsHeader";
import DataCreateFormModal from "../components/Models/DataCreateFormModal";
import DataDeleteFormModal from "../components/Models/DataDeleteFormModal";
import ElementDeleteFormModal from "../components/Models/ElementDeleteFormModal";
import DataUpdateFormModal from "../components/Models/DataUpdateFormModal";
import ElementsBody from "../components/Models/ElementsBody";

const Model = (props) => {
  const { user } = useContext(Context);
  const [model, setModel] = useState(null);
  const [form] = Form.useForm();
  const [dataForm] = Form.useForm();
  const [updateDataForm] = Form.useForm();
  const [fetchedModel, setFetchedModel] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [dataCreationModal, setDataCreationModal] = useState(false);
  const [elementName, setElementName] = useState(null);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [valueId, setValueId] = useState(null);
  const [dataUpdateModal, setDataUpdateModal] = useState(false);
  const [dataValue, setDataValue] = useState(null);
  const [loadingModal, setLoadingModal] = useState(false);

  const [elementToDelete, setElementToDelete] = useState(null);
  const [elementDeleteModal, setElementDeleteModal] = useState(false);

  //Repeated name Error notification -----------------------------------------------------------------
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "ERROR",
      description:
        "An element already exists with that name. Element's names must be unique",
    });
  };
  //load data function ------------------------------------------------------------------
  useEffect(() => {
    const getModel = async () => {
      await handleLoadingModalTrue();

      const { data } = await viewModel(props.match.params.modelId);
      setModel([data]);
      await handleLoadingModalFalse();

      if (fetchedModel === false) {
        setFetchedModel(true);
      }
    };
    getModel();
  }, [fetchedModel]);

  //Create Element functions ------------------------------------------------------------------
  async function onFinish({ elementName }) {
    await handleLoadingModalTrue();

    const newElem = await createElement(
      elementName,
      props.match.params.modelId,
      user._id
    );
    if (!newElem.data) {
      await handleLoadingModalFalse();

      openNotificationWithIcon(`warning`);
    } else {
      await handleLoadingModalFalse();

      form.resetFields();
      setFetchedModel(false);
      handleModal();
    }
  }

  function handleModal() {
    setModalState(!modalState);
    form.resetFields();
  }

  //Delete Element functions ------------------------------------------------------------------

  function handleElementDeletionModal() {
    setElementDeleteModal(!elementDeleteModal);
  }

  function setElementToDeleteF(elementName) {
    setElementToDelete(elementName);
  }

  async function confirmDeleteElement() {
    await handleLoadingModalTrue();
    await deleteElement(elementToDelete, props.match.params.modelId, user._id);
    await handleLoadingModalFalse();
    setFetchedModel(false);
    handleElementDeletionModal();
  }
  // Data Creation functions ------------------------------------------------------------------
  function handleDataCreationModal() {
    setDataCreationModal(!dataCreationModal);
    dataForm.resetFields();
  }
  async function onFinishData(value) {
    await handleLoadingModalTrue();

    await addSingle(value, props.match.params.modelId, elementName, user._id);
    await handleLoadingModalFalse();

    setFetchedModel(false);
    dataForm.resetFields();
    handleDataCreationModal();
  }
  //Delete Data functions ------------------------------------------------------------------

  async function deleteElementModal(elementNameN, valueIdN) {
    await setElementName(elementNameN);
    await setValueId(valueIdN);
    handleDeleteElementModal();
  }

  async function setElementNameF(elementNameN) {
    setElementName(elementNameN);
  }

  function handleDeleteElementModal() {
    setDeleteModalState(!deleteModalState);
    form.resetFields();
  }
  async function deleteWithConfirmation() {
    await handleLoadingModalTrue();
    await deleteSingleData(
      props.match.params.modelId,
      elementName,
      valueId,
      user._id
    );
    await handleLoadingModalFalse();
    setFetchedModel(false);
    form.resetFields();

    handleDeleteElementModal();
  }
  //Update Data functions ------------------------------------------------------------------

  async function updateElementModal(elementNameN, valueIdN, dataValue) {
    await setElementName(elementNameN);
    await setValueId(valueIdN);
    await setDataValue(dataValue);
  }
  function handleDataUpdateModal() {
    setDataUpdateModal(!dataUpdateModal);
    updateDataForm.resetFields();
  }
  async function onFinishUpdateData(value) {
    await handleLoadingModalTrue();
    await updateSingle(
      props.match.params.modelId,
      elementName,
      valueId,
      value,
      user._id
    );
    await handleLoadingModalFalse();
    setFetchedModel(false);
    handleDataUpdateModal();
  }

  //loading modal ------------------------------------------------------------------
  async function handleLoadingModalTrue() {
    await setLoadingModal(true);
  }
  async function handleLoadingModalFalse() {
    await setLoadingModal(false);
  }

  return user ? (
    model ? (
      <div>
        <center>
          <LoadingModal
            loadingModal={loadingModal}
            handleLoadingModalFalse={handleLoadingModalFalse}
          />
          <CreateElementFormModal
            modalState={modalState}
            handleModal={handleModal}
            form={form}
            onFinish={onFinish}
            loadingModal={loadingModal}
          />

          <ElementDeleteFormModal
            elementDeleteModal={elementDeleteModal}
            handleElementDeletionModal={handleElementDeletionModal}
            elementToDelete={elementToDelete}
            confirmDeleteElement={confirmDeleteElement}
            loadingModal={loadingModal}
          />
          <DataCreateFormModal
            dataCreationModal={dataCreationModal}
            handleDataCreationModal={handleDataCreationModal}
            dataForm={dataForm}
            onFinishData={onFinishData}
            loadingModal={loadingModal}
          />
          <DataDeleteFormModal
            deleteModalState={deleteModalState}
            handleDeleteElementModal={handleDeleteElementModal}
            deleteWithConfirmation={deleteWithConfirmation}
            loadingModal={loadingModal}
          />
          <DataUpdateFormModal
            dataUpdateModal={dataUpdateModal}
            handleDataUpdateModal={handleDataUpdateModal}
            dataValue={dataValue}
            updateDataForm={updateDataForm}
            onFinishUpdateData={onFinishUpdateData}
            loadingModal={loadingModal}
          />
          <ElementsHeader props={props} handleModal={handleModal} />
          <div style={{ margin: "20px" }}>
            <ElementsBody
              model={model}
              props={props}
              updateElementModal={updateElementModal}
              handleDataUpdateModal={handleDataUpdateModal}
              deleteElementModal={deleteElementModal}
              handleDataCreationModal={handleDataCreationModal}
              setElementNameF={setElementNameF}
              setElementToDeleteF={setElementToDeleteF}
              handleElementDeletionModal={handleElementDeletionModal}
            />
          </div>
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

export default Model;
