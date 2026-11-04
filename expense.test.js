describe("calculate expenses",()=>{
test("expected to calculate",()=>{
const tasks=[
{amount:120},
{amount:100},
]
expect(calculateTotal(tasks)).toBe(220);
});



});