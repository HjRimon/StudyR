import { useLoaderData } from "react-router-dom";

const GetMark = () => {
  const result = useLoaderData();
  const { pdf } = result;

  function downloadPDF() {
    const link = document.createElement("a");
    link.href = pdf;
    link.target = "_blank";
    link.download = "your-pdf-file.pdf";
    link.click();
  }

  return (
    <div className="w-[80%] mx-auto flex justify-center items-center gap-7">
      <div>
        <button className="btn btn-outline btn-accent" onClick={downloadPDF}>
          Preview PDF
        </button>
      </div>
      <div className="flex flex-col">
        <form>
          <input type="text" name="mark" placeholder="Mark" />
          <input type="text" name="feedback" placeholder="FeedBack" />
        </form>
      </div>
    </div>
  );
};

export default GetMark;
