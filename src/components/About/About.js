import React from 'react';

// Images
import profile from '../../images/profile-picture.JPG';

// Styling
import { Wrapper, Content} from './About.styles';

// Translation
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation(); 
    return (
        <Wrapper>
            <Content>
                <img 
                    id="profile"
                    src={profile} alt="profile picture"
                />
                {t('introduction')}
                <a href = "https://www.linkedin.com/in/minhocho4/">LinkedIn</a>
            </Content>
        </Wrapper>
    )
}

export default About;