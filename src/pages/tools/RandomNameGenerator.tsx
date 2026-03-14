import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ToolLayout";

const firstNames = ["James","Mary","Robert","Patricia","John","Jennifer","Michael","Linda","David","Elizabeth","William","Barbara","Richard","Susan","Joseph","Jessica","Thomas","Sarah","Charles","Karen","Christopher","Lisa","Daniel","Nancy","Matthew","Betty","Anthony","Margaret","Mark","Sandra","Donald","Ashley","Steven","Kimberly","Andrew","Emily","Paul","Donna","Joshua","Michelle","Kenneth","Carol","Kevin","Amanda","Brian","Dorothy","George","Melissa","Timothy","Deborah","Ronald","Stephanie","Edward","Rebecca","Jason","Sharon","Jeffrey","Laura","Ryan","Cynthia","Jacob","Kathleen","Gary","Amy","Nicholas","Angela","Eric","Shirley","Jonathan","Anna","Stephen","Brenda","Larry","Pamela","Justin","Emma","Scott","Nicole","Brandon","Helen","Benjamin","Samantha","Samuel","Katherine","Raymond","Christine","Gregory","Debra","Frank","Rachel","Alexander","Carolyn","Patrick","Janet","Jack","Catherine","Dennis","Maria","Jerry","Heather","Tyler","Diane"];
const lastNames = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts"];

const RandomNameGenerator = () => {
  const [names, setNames] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generate = () => {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      const first = firstNames[Math.floor(Math.random() * firstNames.length)];
      const last = lastNames[Math.floor(Math.random() * lastNames.length)];
      result.push(`${first} ${last}`);
    }
    setNames(result);
  };

  return (
    <ToolLayout title="Random Name Generator" description="Generate random names for characters, projects, or testing.">
      <div className="space-y-4 max-w-md">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Count: {count}</label>
          <input type="range" min="1" max="20" value={count} onChange={e => setCount(parseInt(e.target.value))} className="flex-1 accent-primary" />
        </div>
        <Button onClick={generate} className="w-full">Generate Names</Button>
        {names.length > 0 && (
          <div className="space-y-2">
            {names.map((name, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-accent">
                <span className="font-medium">{name}</span>
                <CopyButton text={name} />
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default RandomNameGenerator;
