import { Card } from "./ui/card";
import { Button } from "./ui/button";
export function Display() {
  return (
    <Card className="h-[500px] w-full shadow-lg rounded-lg">
    <div className="h-[500px] w-[96.6%] flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold">This is your theme display</h1>
            <p className="text-lg">This is a paragraph</p>
            <Button>Click me</Button>
        </div>
    </div>
    </Card>
  );
}