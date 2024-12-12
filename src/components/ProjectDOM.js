const renderProjectForm = function() {
  const body = document.body;

  // form for the body

  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.required = true;
  form.append(titleInput);
  
  body.append(form);
}


export {renderProjectForm};