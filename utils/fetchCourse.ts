export async function fetchCourse() {
  const response = await fetch("/utils/projects.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
