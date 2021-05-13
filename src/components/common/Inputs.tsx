/**
 * @author Andrew Perera
 * Copyright (C) 2020 - All rights reserved
 */

import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import styles from "../../styles/components/common/Inputs.module.scss";

interface IInputLabel
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label: string;
  helper?: string;
  size: "lg" | "sm";
}

export const InputLabel = ({
  size = "lg",
  label,
  helper,
  ...props
}: IInputLabel) => (
  <label className={size === "sm" ? styles.inputSm : styles.input} {...props}>
    {label}
    {helper && <p className={styles.helper}>{helper}</p>}
  </label>
);

interface IFormInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputSize?: "lg" | "sm";
  label: string;
  helperText?: string;
  error?: string | undefined;
}

export const FormInput = ({
  name,
  label,
  helperText,
  error,
  inputSize = "lg",
  ...props
}: IFormInput) => {
  const inputClass = inputSize === "sm" ? styles.inputSm : styles.input;
  const errorClass = error ? styles.error : "";

  const classes = [inputClass, errorClass].join(" ");

  return (
    <div className={styles.formGroup}>
      <InputLabel
        size={inputSize}
        label={label}
        helper={helperText ? helperText : !props.required && "Optional"}
        htmlFor={name}
      />
      <input
        name={name}
        className={classes}
        placeholder={props.placeholder || label}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

interface ITextBox
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  inputSize?: "lg" | "sm";
  label: string;
  helperText?: string;
  error?: string | undefined;
}

export const TextBox = ({
  name,
  label,
  helperText,
  error,
  ...props
}: ITextBox) => (
  <div className={styles.formGroup}>
    <InputLabel
      size="lg"
      label={label}
      helper={helperText ? helperText : !props.required && "Optional"}
      htmlFor={name}
    />
    <textarea
      placeholder={props.placeholder || label}
      className={styles.textBox}
      {...props}
    ></textarea>
    {error && <p className={styles.error}>{error}</p>}
  </div>
);
