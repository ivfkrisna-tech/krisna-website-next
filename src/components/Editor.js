import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Styles import karna zaroori hai

const Editor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'link'], // Ye rahe options
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ],
  };

  return (
    <ReactQuill 
      theme="snow" 
      value={value} 
      onChange={onChange} 
      modules={modules} 
    />
  );
};

export default Editor;