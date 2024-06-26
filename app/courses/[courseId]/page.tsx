export default function CourseDetail({
  params,
}: {
  params: {
    courseId: string;
  };
}) {
  return (
    <div>
      <h1>Course Detail: {params.courseId}</h1>
    </div>
  );
}
