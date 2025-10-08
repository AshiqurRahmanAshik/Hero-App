export const loadAppList = () => {
  try {
    const data = localStorage.getItem("appList");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const updateList = () => {
  const appList = loadAppList();
  try {
    const isDuplicate = appList.some((p) => p.id === app.id);
    if (isDuplicate) return alert("Already added..");
    const updatedAppList = [...appList, app];
    localStorage.setItem("appList", JSON.stringify(updatedAppList));
  } catch (err) {
    console.log(err);
  }
};
