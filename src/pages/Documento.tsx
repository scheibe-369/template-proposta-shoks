import { DocumentoPdf } from "@/modules/proposta";
import { proposta } from "@/modules/proposta/data/proposta.config";
import logo from "@/assets/logo-shoks.webp";

const Documento = () =>
  proposta.documento ? <DocumentoPdf data={proposta.documento} logoSrc={logo} /> : null;

export default Documento;
