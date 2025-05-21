import { useState } from "react";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const schema = z.object({
  confirm: z.literal("delete my account", {
    errorMap: () => ({ message: "You must type 'delete my account' exactly." })
  })
});

export function DeleteAccount() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setError(null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = schema.safeParse({ confirm: value });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError(null);
    console.log({ confirm: value });
  }

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>This will remove your account from the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 border border-destructive rounded text-destructive">
          Please be absolutely sure you want to delete your account. You will not be able to recover your account after this.
        </div>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="confirm" className="mb-2 block">
            Please type <span className="font-mono bg-muted px-1 py-0.5 rounded">delete my account</span> to confirm.
          </Label>
          <Input
            id="confirm"
            value={value}
            onChange={handleChange}
            placeholder="delete my account"
            aria-invalid={!!error}
            className={error ? "border-destructive" : ""}
            autoComplete="off"
          />
          {error && <div className="text-destructive text-sm mt-1">{error}</div>}
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="button" variant="outline" onClick={() => { setValue(""); setError(null); }}>Cancel</Button>
            <Button type="submit" variant="destructive" disabled={value !== "delete my account"}>Delete Account</Button>
          </CardFooter>
        </form>
      </CardContent>
      <div className="text-xs text-muted-foreground text-center mt-2 px-6 pb-2">
        Don't worry, nothing will happen if you click the button above.
      </div>
    </Card>
  );
}

