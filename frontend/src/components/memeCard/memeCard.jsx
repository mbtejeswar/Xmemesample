import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import classes from "./styles.module.css";

const memeCard = (props) => {
  return (
    <div id={props.id} className={classes["memeCard"]}>
      <Card>
        <Card.Content>
          <div>
            <Icon name="user outline" />{" "}
            <Card.Header className={classes.header}>
              {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </Card.Header>
            <div onClick={props.showModal} className={classes.editIcon}>
              <Icon id={props.id} name="edit outline" />
            </div>
          </div>

          <Card.Meta>
            @{props.name.charAt(0).toLowerCase() + props.name.slice(1)}
          </Card.Meta>
        </Card.Content>
        <div className={classes["cardImageContainer"]}>
          <Image
            className={classes["cardImage"]}
            src={props.image}
            wrapped
            ui={false}
          />
        </div>
        <Card.Content>
          <Card.Description>{props.caption}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default memeCard;
