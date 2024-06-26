import Direction from "@/components/buttons/direction-button";
import previous from "@/public/courses/previous.svg";
import next from "@/public/courses/next.svg";

export default function CourseDetail({
  params,
}: {
  params: {
    courseId: string;
    checkpointId: string;
  };
}) {
  const currentCheckpointId = parseInt(params.checkpointId, 10);
  const previousCheckpointId = currentCheckpointId - 1;
  const nextCheckpointId = currentCheckpointId + 1;

  return (
    <main className="h-screen py-6 px-6">
      <div className="bg-black h-full text-white rounded-[4rem] flex flex-col w-full py-[80px] px-[120px] relative">
        <h1 className="text-center text-white text-[34px] font-semibold font-lora leading-[34px]">
          Basics of Lua
        </h1>
        <div className="mt-8 text-[#E9FF91] text-base font-semibold font-plus-jakarta-sans uppercase leading-normal">
          Checkpoint : {params.checkpointId}
        </div>
        <div className="flex items-center justify-between">
          {previousCheckpointId > 0 && (
            <a href={`/courses/${params.courseId}/${previousCheckpointId}`}>
              <Direction
                bgColor="bg-[#282828]"
                textColor="text-[#828282]"
                text="Previous exercise"
                icon={previous}
              />
            </a>
          )}
          <a href={`/courses/${params.courseId}/${nextCheckpointId}`}>
            <Direction
              bgColor="bg-[#E9FF91]"
              textColor="text-[#060606]"
              text="Next exercise"
              icon={next}
            />
          </a>
        </div>
      </div>
    </main>
  );
}