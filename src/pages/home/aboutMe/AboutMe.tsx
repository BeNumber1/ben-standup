import styled from "@emotion/styled";
import topology from "../../../config/topology";
import { useThemeState } from "../../../context/useThemeState";
import { THEMES, ThemeType } from "../../../theme";
import Colors from "../../../theme/Colors";
import { DESKTOP_MQ } from "../../../theme/theme.constants";

const AboutMe: React.FC = () => {
  const links = topology();
  const { theme } = useThemeState();

  return (
    <Container id="about">
      <H2 theme={theme}>מי אני</H2>
      <Row>
        <Img src={`${links.baseUrl}/images/img3.png`} alt="בן ביטון" />
        <Article>
          <P>
          בן ביטון נולד בבת ים בתאריך 20 לנובמבר 1992, כל ילדותו גדל בעיר הפסטורלית בת ים ובעקבות כך התאהב בעיר ונשאר בו עד עצם היום הזה.
          </P>
               <P>
               בן למד במהלך כל ילדותו ובנעוריו בבתי ספר ממלכתיים דתיים ולכן חלק מהופעתו מדברת על דברים שקשורים לתנ”ך, למסורת ועוד.
               </P>
                   <P>
                   בשירותו רצה להיות לוחם והתגייס למשמר הגבול, שם במהלך המסלול שעבר הגיע ליחידה שאין לומר את שמה, לאחר מכן למד הנדסת בניין אז אם אתם מעוניינים שתיפול לכם המרפסת תפנו אליו בנושא.
בן יודע לקחת כל נושא ולהקליל אותו, מאז ומתמיד חשב בצורה קומית על כל דבר שקרה לו בחיים.
                   </P>
                         <P>
               למרות שבעבר הרחוק היה לו פחד במה גדול הוא תמיד חלק לכבוש את הבמות הגדולות, לאחר שנים של כתיבה קומית ועבודה כמרצה ומורה הוא למד לעמוד מול קהל והתגבר על הפחד.
מאז הוא כבש כל במה אפשרית, אצל שחר חסון בקומדי בר, בקאמל קומדי בר ובסטנד אפ פקטורי.
בן שיגע את האינטרנט והפך לכוכב טיק טוק שכמעט כל צעיר מכיר
               </P>
        </Article>
      </Row>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  ${DESKTOP_MQ} {
    padding: 80px;
  }
`;

const H2 = styled.h2<{ theme: ThemeType }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h2};
  display: block;
  font-size: 50px;
  font-weight: bolder;
  position: relative;
  text-align: center;

  &::after {
    content: "מי אני";
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }

  ${DESKTOP_MQ} {
    text-align: start;
  }
`;

const Img = styled.img`
  width: 300px;
  border-radius: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 5px solid yellow;
  margin-right: 0px;
  background-color: red;

  ${DESKTOP_MQ} {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${DESKTOP_MQ} {
    flex-direction: row-reverse;
  }
`;

const P = styled.p`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 300;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  ${DESKTOP_MQ} {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 300;
    font-size: 25px;
  }
`;
const Article = styled.article`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 300;
  width: 100%;

  ${DESKTOP_MQ} {
    margin: 0;
    font-size: 30px;
    font-weight: 300;
  }
`;
