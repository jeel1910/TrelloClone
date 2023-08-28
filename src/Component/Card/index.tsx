import React, { useState } from "react";
import { AiOutlineEdit, AiOutlinePlus, AiFillCreditCard } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { Field, Form, useFormik } from "formik";

import { CardStyle } from "./Card-style";

const Card: React.FC = (props: any) => {
  const [isAddCard, setIsAddCard] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);

  const formik = useFormik({
    initialValues: {
      task: "",
    },

    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const onTaskChange = (value: string) => {};

  return (
    <CardStyle>
      <div className="card-title flex">
        {props.title}
        <BsThreeDots />
      </div>

      {props.task && (
        <div className="task-box flex">
          task
          <AiOutlineEdit onClick={() => setIsAddTask(true)} />
        </div>
      )}

      {isAddTask && (
        <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <input
            id="task"
            name="task"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.task}
          />
          <button type="submit">Submit</button>
        </Form>
      )}

      <div className="flex">
        {isAddCard ? (
          <></>
        ) : (
          <span
            className="add-card-bottom"
            onClick={() => {
              console.log("in");
            }}
          >
            <AiOutlinePlus
              style={{ marginRight: "5%", width: "5%", height: "20%" }}
            />
            Add a card
          </span>
        )}

        <AiFillCreditCard className="card-icon" />
      </div>
    </CardStyle>
  );
};

export default Card;
