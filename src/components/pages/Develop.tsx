/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { ChangeEvent, useReducer } from "react";
import { Logo } from "../navigation/Header";
import { FormInput, TextBox } from "../common/Inputs";
import { Button } from "../common/Buttons";

import styles from "../../styles/pages/Develop.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export const PageRoot: React.FC = (props) => (
  <div className={styles.root}>{props.children}</div>
);

interface ILanding {
  title: string;
  subtitle: string;
}

export const Landing = (props: ILanding) => (
  <section className={styles.landing}>
    <h1>{props.title}</h1>
    <p className={styles.subtitle}>{props.subtitle}</p>
  </section>
);

const NAME_CHANGED = "name_changed";
const EMAIL_CHANGED = "email_changed";
const DESCRIPTION_CHANGED = "description_changed";

interface IAction {
  type: string;
  payload: string;
}

const initialFormState = {
  name: "",
  email: "",
  description: "",
};

function formReducer(state: typeof initialFormState, action: IAction) {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };
    default:
      return state;
  }
}

export const Form = () => {
  const [form, dispatch] = useReducer(formReducer, initialFormState);

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: NAME_CHANGED, payload: event.target.value });
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EMAIL_CHANGED, payload: event.target.value });
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: EMAIL_CHANGED, payload: event.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        onChange={onEmailChange}
        required
      />
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Full Name"
        onChange={onNameChange}
      />
      <TextBox
        id="description"
        name="description"
        label="Project Description"
        onChange={onDescriptionChange}
        required
      />
      <Button label="Submit" loadingLabel="Just a moment..." type="submit" />
    </form>
  );
};
