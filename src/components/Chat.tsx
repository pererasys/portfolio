/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { useEffect, useState } from "react";

import {
  faArrowRight,
  faEllipsisH,
  faEnvelope,
  faPhone,
  faTimes,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { BeatLoader } from "react-spinners";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import { Button, IconAction, IconButton } from "./common/Buttons";
import Dropdown, { DropdownList } from "./common/Dropdown";
import Overlay from "./common/Overlay";

import styles from "../styles/components/Chat.module.scss";

interface IMessage {
  message: string;
}

const Message = (props: IMessage) => (
  <li className={styles.message}>{props.message}</li>
);

interface IMessageList {
  loading: boolean;
}

const MessageList = ({ loading }: IMessageList) => {
  const [messages, setMessages] = useState([
    "Ask me anything! eg. Where did you grow up?",
  ]);

  const renderMessage = (msg: string, index: number) => (
    <Message message={msg} key={String(index)} />
  );

  return (
    <ul className={styles.messageList}>
      {loading ? (
        <BeatLoader loading={loading} color="#d3d3d3" size={12} />
      ) : (
        messages.map(renderMessage)
      )}
    </ul>
  );
};

const NewMessage = () => (
  <div className={styles.new}>
    <textarea
      id="message"
      name="message"
      className={styles.newMessage}
      placeholder="What do you want to know?"
    ></textarea>
    <div className={styles.actions}>
      <Button label="Send" icon={faArrowRight} size="sm" color="accent" />
      <Dropdown
        renderAnchor={(open) => (
          <IconAction
            icon={faEllipsisH}
            size="sm"
            color="accent"
            onClick={open}
          />
        )}
        y="top"
        x="right"
      >
        <DropdownList
          options={[
            { label: "Email", icon: faEnvelope },
            { label: "Phone", icon: faPhone },
          ]}
        />
      </Dropdown>
    </div>
  </div>
);

const Chat = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const elem = document.querySelector("body");
    if (active) {
      disableBodyScroll(elem);
    } else {
      enableBodyScroll(elem);
    }
  }, [active]);

  const toggleChat = () => {
    setActive(!active);
  };

  const chatClasses = [styles.chat];
  const actionClasses = [styles.action];

  if (active) chatClasses.push(styles.active);
  else actionClasses.push(styles.active);

  return (
    <React.Fragment>
      <div className={chatClasses.join(" ")}>
        <div className={styles.header}>
          <h4>Chat</h4>
          <IconAction
            icon={faTimes}
            color="accent"
            onClick={toggleChat}
            size="sm"
          />
        </div>
        <MessageList loading={true} />
        <NewMessage />
      </div>
      <div className={actionClasses.join(" ")}>
        <IconButton icon={faCommentAlt} color="accent" onClick={toggleChat} />
      </div>
      {active && <Overlay onClick={toggleChat} />}
    </React.Fragment>
  );
};

export default Chat;
