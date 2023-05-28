import { ChartValue } from "@/types";

export function GenerateTableFunction(start: number, end: number, inc: number, b: number, c: number) {
  // f(y) = x^2 + bx + c
  const res: ChartValue[] = [];
  let count = 0;
  for(let i = start;i < end + 1;i += inc) {
    res.push({
      id: count,
      x: i,
      y: CalculateFunction(i, b, c),
    })
    count += 1;
  }

  return res;
}

function CalculateFunction(x: number, b: number, c: number) {
  return (x*x) + (b * x) + c
}