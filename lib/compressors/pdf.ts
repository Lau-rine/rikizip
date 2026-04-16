import { PDFDocument } from "pdf-lib";

export async function compressPdf(file: File): Promise<File> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer, {
    updateMetadata: false,
  });

  // Optimisations pdf-lib : suppression des métadonnées + stream compression
  pdfDoc.setTitle("");
  pdfDoc.setAuthor("");
  pdfDoc.setSubject("");
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer("RikiZip");
  pdfDoc.setCreator("RikiZip");

  const compressedBytes = await pdfDoc.save({
    useObjectStreams: true,
    addDefaultPage: false,
  });

  return new File([compressedBytes], file.name, { type: "application/pdf" });
}
