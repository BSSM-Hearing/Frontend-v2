import { getSlot } from "./date";

test("아침 테스트", () => {
  expect(getSlot(new Date("1995-12-17T06:09:00"))).toBe("아침");
});

test("오후 테스트", () => {
  expect(getSlot(new Date("1995-12-17T15:15:00"))).toBe("오후");
});

test("저녁 테스트 - 18시 ~ 다음날 6시", () => {
  expect(getSlot(new Date("1995-12-17T20:20:00"))).toBe("저녁");
});
