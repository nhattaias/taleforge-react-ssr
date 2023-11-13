import React from 'react';
import { ReactComponent as ReactGitLabIcon } from '../../assets/icon-gitlab.svg';
import { ReactComponent as ReactFaceBookIcon } from '../../assets/icon-facebook.svg';
import { ReactComponent as ReactGithubIcon } from '../../assets/icon-github.svg';
import { ReactComponent as ReactTelegramIcon } from '../../assets/icon-telegram.svg';
import { ReactComponent as ReactInstagramIcon } from '../../assets/icon-instagram.svg';
import { ReactComponent as ReactFigmaIcon } from '../../assets/icon-figma.svg';
import Divider from '../Divider';
import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={css.footer}>
            <ul className={css.footer__socialMediaLinks}>
                <li>
                    <ReactGitLabIcon className={css.footer__socialMediaLink_icon} />
                </li>
                <li>
                    <ReactFaceBookIcon className={css.footer__socialMediaLink_icon} />
                </li>
                <li>
                    <ReactGithubIcon className={css.footer__socialMediaLink_icon} />
                </li>
                <li>
                    <ReactTelegramIcon className={css.footer__socialMediaLink_icon} />
                </li>
                <li>
                    <ReactInstagramIcon className={css.footer__socialMediaLink_icon} />
                </li>
                <li>
                    <ReactFigmaIcon className={css.footer__socialMediaLink_icon} />
                </li>
            </ul>

            <div className={css.footer__menu}>
                <span>About</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Gallery</span>
                <span>Team</span>
            </div>
            <p className={css.footer__contact}>Contact Us</p>
            <Divider />
            <p className={css.footer__copyright}>© 2023 All Rights Reserved</p>
        </div>
    );
};

export default Footer;
