"use client";
import { useState } from "react";

const NEEDS = ["Static Page", "Web Service", "Landing Page", "Design", "Others"];
const BUDGETS = ["500 $", "500-1000 $", "1000-2000 $", "Others"];

const page = () => {

  // choices states
  const [step, setStep] = useState<number>(1);
  const [choices, setChoices] = useState<string[]>(["", ""]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // submition states 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  const select = (index: number, value: string): void => {
    setChoices((prev: string[]): string[] => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  // can't continue without a selection
  const canContinue = step < 3 && choices[step - 1] !== "";
  const canSubmit = name.trim() && email.trim() && message.trim();

  const next = () => canContinue && setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!canSubmit || loading) return;

    setLoading(true);
    setError("");

    try {

      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          name,
          email,
          company,
          message
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setSuccess(true);

    } catch (err) {
      setError("Something went wrong. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  const optionClass = (selected: boolean): string =>
    `px-[4%] bg-background py-[3%] border-[0.1em] text-lightGray text-left cursor-pointer ${selected ? "border-acent" : "border-darkGray"
    }`;

  return (
    <div className="linearBg h-screen w-screen flex flex-col justify-evenly items-center py-[6%]">
      <div className="w-[70%] bg-[#0D0D0D9F] md:w-[50%] p-[4%] border-[0.1em] border-darkGray">
        {/* progress */}
        <div className="w-full flex gap-2">
          <span className="uppercase text-lightGray text-[clamp(0.5rem,4vw,0.8rem)]">
            step {step}/3
          </span>
          <div className="w-full h-[3px] bg-lightGray">
            <div
              className="h-full bg-acent transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* level one */}
        {step === 1 && (
          <>
            <div className="w-full py-[6%] text-gray text-[clamp(1.5rem,4vw,2rem)]">
              <h3>What do you need?</h3>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              {NEEDS.map((item: string): Element => (
                <button
                  type="button"
                  key={item}
                  onClick={(): void => select(0, item)}
                  className={optionClass(choices[0] === item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}

        {/* level two */}
        {step === 2 && (
          <>
            <div className="w-full py-[6%] text-gray text-[clamp(1.5rem,4vw,2rem)]">
              <h3>What&apos;s your budget?</h3>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              {BUDGETS.map((item: string): Element => (
                <button
                  type="button"
                  key={item}
                  onClick={(): void => select(1, item)}
                  className={optionClass(choices[1] === item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}

        {/* buttons for level one & two */}
        {step < 3 && (
          <div
            className={`w-full flex pt-[8%] ${step === 1 ? "justify-end" : "justify-between"
              }`}
          >
            {step > 1 && (
              <button
                type="button"
                onClick={back}
                className="px-[4%] py-[2%] text-gray bg-background border-darkGray border-[0.1em]"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!canContinue}
              className="px-[4%] py-[2%] bg-acent text-background disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* level three */}
        {step === 3 && (
          <>
            <div className="w-full py-[6%] text-gray text-[clamp(1.5rem,4vw,2rem)]">
              <h3>How do you contact us?</h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full grid grid-cols-2 grid-rows-7 gap-4"
            >
              <div className="flex flex-col gap-2 text-lightGray col-span-1 row-span-1">
                <label>NAME</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  className="border-darkGray bg-background border-[0.1em] p-[4%]"
                />
              </div>

              <div className="flex flex-col gap-2 text-lightGray col-span-1 row-span-1">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="border-darkGray bg-background border-[0.1em] p-[4%]"
                />
              </div>

              <div className="flex flex-col gap-2 text-lightGray col-span-1 row-span-1">
                <label>COMPANY(optional)</label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                  className="border-darkGray bg-background border-[0.1em] p-[4%]"
                />
              </div>

              <div className="flex flex-col gap-2 text-lightGray col-span-2 row-span-3">
                <label>DESCRIPTION</label>
                <textarea
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  className="border-darkGray resize-none h-full bg-background border-[0.1em] p-[4%]"
                ></textarea>
              </div>

              <div className="col-span-2 row-span-1 flex justify-between items-center">
                <button
                  type="button"
                  onClick={back}
                  className="px-[4%] py-[2%] text-gray bg-background border-darkGray border-[0.1em]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="px-[4%] py-[2%] bg-acent text-background disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
