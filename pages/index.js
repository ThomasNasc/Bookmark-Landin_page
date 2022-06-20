import styled from "styled-components";
import Download from "../components/DownloadPage/Download";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import Menu_Header from "../components/header.menu";
import Homepage from "../components/Homepage";
const Layout = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-left: auto;

  margin-right: auto;
  background-color: white;
  height: 100vh;
`;

export default function Home() {
  return (
    <Layout>
      <Menu_Header />
      <Homepage />
      <Features />
      <Download />
      <FrequentlyQuestions />
      <Footer />
    </Layout>
  );
}
