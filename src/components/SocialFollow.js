import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import socialStyles from './SocialFollow.module.css';

export default function SocialFollow() {
  return (
  <div>
    <div className={socialStyles.container}>
      <a target="_blank" rel="noopener noreferrer" href="" 
      className={[socialStyles.instagram, socialStyles.social].join(" ")}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a
        target="_blank" rel="noopener noreferrer"
        href="https://www.facebook.com/Altgrind-311652639710532/?device_id=4247a2b2-7421-4750-99f4-23b37e74efa3"
        className={[socialStyles.facebook, socialStyles.social].join(" ")}
        //className={[this.state.className, this.props.content.divClassName].join(" ")
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a 
        target="_blank" rel="noopener noreferrer"
        href="https://twitter.com/altgrind" className={[socialStyles.twitter, socialStyles.social].join(" ")}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        target="_blank" rel="noopener noreferrer"
        href="https://www.instagram.com/altgrind/"
        className={[socialStyles.instagram, socialStyles.social].join(" ")}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
    </div>
  );
}