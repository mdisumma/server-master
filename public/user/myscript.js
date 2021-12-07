const setTasks = document.getElementById("selectData");
const monthCat = document.getElementById("dateValue");
const taskBtn = document.getElementById("dataToCalendar");
// const calendar;

document.addEventListener("DOMContentLoaded", () => {
	//SUPABASE
	const { createClient } = supabase;
	supabase = createClient(
		"https://twphegmcopuxhufqbpfg.supabase.co",
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDc0NjI5NSwiZXhwIjoxOTUwMzIyMjk1fQ.uUoHk5B21XcyCpeJt_my-DunpgVaB0UVn3DqFXz7o1I"
	);
});

taskBtn.addEventListener("click", (e) => {
	console.log(e);
});
