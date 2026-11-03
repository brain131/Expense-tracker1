const {addTasks,cleatTasks}=require("./expense")

test("should add an expense",()=>{
    expect(addTasks()).toBe("expense added");
});

test("should clear expenses",()=>{
expect(cleatTasks()).toBe("expenses cleared");
});
