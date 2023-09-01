import styled from "@emotion/styled";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { useThemeState } from "../../../context/useThemeState";
import { THEMES, ThemeType } from "../../../theme";
import Colors from "../../../theme/Colors";
import { DESKTOP_MQ } from "../../../theme/theme.constants";
import topology from "../../../config/topology";

export const FACEBOOK_LINK = "https://www.facebook.com/bbiton";
export const WHATSAPP_LINK = "whatsapp://send?text=שלום בן פניתי בנושא מופע סטנדאפ אנא חזור אליי.&phone=972523255172";

const Hero: React.FC = () => {
  const links = topology();
  const { theme } = useThemeState();

  return (
    <Container theme={theme}>
      <Row>
        <H1 theme={theme}>בן ביטון</H1>
        <P>מופע סטנדאפ</P>
        <div style={{display:"flex"}}>
          <StyledAnchorLink href="#about" theme={theme}>
            מי אני
          </StyledAnchorLink>
          <StyledAnchorLink href="#contact-me" theme={theme}>
            צרו קשר
          </StyledAnchorLink>
        </div>
      </Row>
      <RowContact>
        <DIV />
        <Img src={`${links.baseUrl}/images/ben.png`} />
      </RowContact>
    </Container>
  );
};

export default Hero;

const Img = styled.img`
  height: auto;
  width: 100%;
  transform-origin: bottom center;
  position: absolute;
  bottom: 0;
  left: 54%;
  z-index: 0;
  transform: scale(1.2) translateY(30px) translateX(-42%);

  ${DESKTOP_MQ} {
    transform-origin: bottom center;
    height: 98%;
    width: auto;
    left: 3%;
    transform: unset;
  }
`;

const DIV = styled.div`
  height: 900px;
  width: 900px;
  border-radius: 50%;
  background-color: #ffffaf20;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  bottom: -210px;

  ${DESKTOP_MQ} {
    transform: unset;
    bottom: 0px;
    left: 0%;
    right: unset;
  }
`;

const Container = styled.div`
  display: flex;
  height: calc(100% - 60px);
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  ${DESKTOP_MQ} {
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledIoDocumentAttachOutline = styled(IoDocumentAttachOutline)`
  cursor: pointer;
`;

const H1 = styled.h1<{ theme: ThemeType }>`
  font-weight: bolder;
  font-size: 60px;
  /* margin-top: 10px; */
  color: ${(p) => THEMES[p.theme.themeName]?.h1};
  text-align: center;
  position: relative;
  margin: 10px 0 0px 0;

  ${DESKTOP_MQ} {
    font-size: 120px;
    text-align: left;
  }

  &::after {
    content: "בן ביטון";
    color: yellow;
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;

const P = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
  font-weight: bold;
  margin: 0 0 15px 0;

  ${DESKTOP_MQ} {
    margin-bottom: 30px;
    font-size: 50px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  margin-bottom: 30px;
  z-index: 1;

  ${DESKTOP_MQ} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 80px;
    margin-bottom: 400px;
  }
`;

const StyledAnchorLink = styled(AnchorLink)<{ theme: ThemeType }>`
  width: 120px;
  height: 35px;
  border-radius: 20px;
  background: yellow;
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  padding: 5px 10px;
  color: ${Colors.black};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:last-child{
    margin-inline-start: 20px;
  }

  ${DESKTOP_MQ} {
    width: 200px;
    height: 55px;
    font-size: 35px;
  }
`;

const RowContact = styled.div`
  display: flex;
  padding-bottom: 200px;

  ${DESKTOP_MQ} {
    justify-content: space-around;
  }
`;

// const Link = styled.a`
//     display: block;
//     margin: 20px;
// `;
