import React, { useCallback, useEffect, useState } from "react";
import TextField from "../TextField";
import ButtonGroup from "../ButtonGroup";
import {
  createItem,
  deleteItem,
  getOneItem,
  updateItem,
} from "../../api/items";

function AddCard({ getTodosAPI, todoID, itemID, adding, cancel }) {
  const [name, setName] = useState("");

  const getOneItemAPI = useCallback(async () => {
    try {
      const response = await getOneItem(itemID);
      if (response.data.message === "success") {
        setName(response.data.data.name);
      }
    } catch (error) {
      console.log(error);
    }
  }, [itemID]);

  useEffect(() => {
    getOneItemAPI();
  }, [getOneItemAPI]);

  const onChange = (e) => {
    setName(e.target.value);
  };
  const clear = () => {
    setName("");
    cancel();
  };

  const saveItem = async () => {
    try {
      const payload = {
        name: name,
        TodoId: todoID,
      };
      const response = await createItem(payload);
      if (response.data.message === "success") {
        getTodosAPI();
        clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateItemAPI = async () => {
    try {
      const payload = {
        name: name,
      };
      const response = await updateItem(itemID, payload);
      if (response.data.message === "success") {
        getTodosAPI();
        clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItemAPI = async (id) => {
    try {
      const response = await deleteItem(id);
      if (response.data.message === "success") {
        getTodosAPI();
        clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-card">
      <div className="card">
        <TextField
          className={"edit-card-text-area"}
          name={"name"}
          placeholder={"Enter a title for this card"}
          value={name}
          onChange={onChange}
        />
      </div>
      <ButtonGroup
        handleSave={() => {
          adding ? saveItem() : updateItemAPI();
        }}
        saveLabel={adding ? "Add Card" : "Edit Card"}
        handleCancel={cancel}
        handleDelete={() => deleteItemAPI(itemID)}
      />
    </div>
  );
}

export default AddCard;
