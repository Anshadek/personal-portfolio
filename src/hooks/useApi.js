import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(endpoint);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id) => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`${endpoint}/${id}`);
      return res.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const create = async (payload) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(endpoint, payload);
      setData((prev) => [...(prev || []), res.data]);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const update = async (id, payload) => {
    setLoading(true);
    try {
      const res = await axiosInstance.put(`${endpoint}/${id}`, payload);
      setData((prev) => prev.map((item) => (item.id === id ? res.data : item)));
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    setLoading(true);
    try {
      await axiosInstance.delete(`${endpoint}/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [endpoint]);

  return { data, loading, error, fetchAll, fetchById, create, update, remove };
};

export default useApi;
