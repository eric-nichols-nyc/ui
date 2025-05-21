import { cn } from "@/lib/utils";
import { Buttons } from "./buttons";
import { CreateProject } from "./create-project";
import { Notifications } from "./notifications";
import { DeleteAccount } from "./delete-account";
import { Login } from "./login";
import { CalendarDemo } from "./calendardemo";

export function Cards() {
  return (
    <div>
      <div className="flex flex-col gap-2 pb-8 text-center text-sm overflow-visible min-h-fit bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*]:break-inside-avoid">
          <DemoContainer>
            <Notifications />
          </DemoContainer>
          <DemoContainer>
            <Buttons />
          </DemoContainer>
          <DemoContainer>
            <CreateProject />
          </DemoContainer>
          <DemoContainer>
            <DeleteAccount />
          </DemoContainer>
          <DemoContainer>
            <Login />
          </DemoContainer>
          <DemoContainer>
            <CalendarDemo />
          </DemoContainer>
        </div>
      </div>
    </div>
  );
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}
