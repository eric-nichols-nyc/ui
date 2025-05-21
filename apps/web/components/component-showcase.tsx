import { Button } from "@repo/ui/button/button";
import { RippleButton } from "@repo/ui/components/buttons/ripple-button";
export function ComponentShowcase() {
  return (
    <div>
      <h1>Components</h1>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1>Buttons</h1>
          <Button>Click me</Button>
          <RippleButton>Click me</RippleButton>
        </div>
      </section>
    </div>
  );
}
