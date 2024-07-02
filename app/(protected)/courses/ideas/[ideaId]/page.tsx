import Direction from "@/components/buttons/direction-button";
import MiniButton from "@/components/buttons/mini-direction-button";
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
    <main className="min-h-screen lg:h-screen bg-black lg:bg-white p-0 lg:py-6 lg:px-6">
      <div className="bg-black h-full text-[#FEFEFE] rounded-[4rem] flex flex-col w-full p-2 pt-10 lg:py-[80px] lg:px-[120px] relative">
        <div className="flex justify-between items-center gap-8">
          <div className="flex lg:hidden">
            {" "}
            <MiniButton bg="bg-[#282828]" image={previous} />
          </div>
          <div className="text-center text-white text-[24px] lg:text-[34px] font-semibold font-lora leading-[34px]">
            Basics of Lua
          </div>
          <div>
            <div className="flex lg:hidden">
              {" "}
              <MiniButton bg="bg-[#E9FF91]" image={next} />
            </div>
          </div>
        </div>
        <div className="mt-8 text-[#E9FF91] text-center lg:text-start text-base font-semibold font-plus-jakarta-sans uppercase leading-normal">
          Checkpoint : {params.courseId}
        </div>
        <div className="flex items-center justify-between">
          {previousCheckpointId > 0 && (
            <a href={`/courses/ideas/${params.courseId}`}>
              <Direction
                bgColor="bg-[#282828]"
                textColor="text-[#828282]"
                text="Previous exercise"
                icon={previous}
              />
            </a>
          )}
          <a href={`/courses/ideas/${params.courseId}`}>
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
