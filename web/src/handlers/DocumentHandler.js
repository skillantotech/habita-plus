"use client"; 

import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  createDocumentBySocietyService,
  createDocumentByUserService,
  getDocumentBySocietyService,
  getDocumentByUserService,
  updateDocumentBySocietyService,
  updateDocumentByUserService,
  deleteDocumentService,
} from "@/services/documentService"; 

const DocumentHandler = () => {
  const token = useSelector((state) => state.auth.token);
  // const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);
  const societyId = 2;

  const buildFormData = (data) => {
    const formData = new FormData();
    if (data.documentName) formData.append("documentName", data.documentName);
    if (data.userGroupId) formData.append("userGroupId", data.userGroupId);
    if (data.document) formData.append("document", data.document);
    return formData;
  };

  const createDocumentBySocietyHandler = async (data) => {
    try {
      const formData = buildFormData(data);
      const res = await createDocumentBySocietyService(formData, societyId, token);
      if (res.status === 201) toast.success("Document created for society.");
      return res;
    } catch (err) {
      toast.error("Failed to create society document.");
      console.error(err);
    }
  };

  const getDocumentBySocietyHandler = async () => {
    try {
      const res = await getDocumentBySocietyService(societyId, token);
      if (res.status === 200) return res.data;
    } catch (err) {
      toast.error("Failed to fetch society documents.");
      console.error(err);
    }
  };

  const createDocumentByUserHandler = async (data) => {
    try {
      const formData = buildFormData(data);
      const res = await createDocumentByUserService(formData, userId, token);
      if (res.status === 201) toast.success("Document created for user.");
      return res;
    } catch (err) {
      toast.error("Failed to create user document.");
      console.error(err);
    }
  };

  const getDocumentByUserHandler = async () => {
    try {
      const res = await getDocumentByUserService(userId, token);
      if (res.status === 200) return res.data;
    } catch (err) {
      toast.error("Failed to fetch user documents.");
      console.error(err);
    }
  };

  const updateDocumentHandler = async (data, documentId, isSociety = true) => {
    try {
      const formData = buildFormData(data);
      const res = isSociety
        ? await updateDocumentBySocietyService(formData, documentId, token)
        : await updateDocumentByUserService(formData, documentId, token);
      if (res.status === 200) toast.success("Document updated successfully.");
      return res;
    } catch (err) {
      toast.error("Failed to update document.");
      console.error(err);
    }
  };

  const deleteDocumentHandler = async (documentId) => {
    try {
      const res = await deleteDocumentService(documentId, token);
      if (res.status === 200) toast.success("Document Permanently Deleted.");
      return res;
    } catch (err) {
      toast.error("Failed to delete document.");
      console.error(err);
    }
  };

  return {
    createDocumentBySocietyHandler,
    getDocumentBySocietyHandler,
    createDocumentByUserHandler,
    getDocumentByUserHandler,
    updateDocumentHandler,
    deleteDocumentHandler,
  };
};

export default DocumentHandler;



