<script>
function get_birth()
    {
		var birth_date = new Date(document.getElementById("birth_date").value);
		var birth_date_day = birth_date.getDate();
		var birth_date_month = birth_date.getMonth();
        var birth_date_year = birth_date.getFullYear();

		var today_date = new Date();
		var today_day = today_date.getDate();
        var today_month = today_date.getMonth();
        var today_year = today_date.getFullYear();

		var calculated_age = 0;

		if (today_month > birth_date_month) calculated_age = today_year - birth_date_year;
		else if (today_month == birth_date_month)
		{
			if (today_day >= birth_date_day) calculated_age = today_year - birth_date_year;
            else calculated_age = today_year - birth_date_year - 1;
		}
		else calculated_age = today_year - birth_date_year - 1;

		var output_value = calculated_age;
        document.getElementById("calculated_age").innerHTML = calculated_age;
    }
    }
</script>