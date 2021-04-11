<script>
zeroBasedCentury = parseInt(yearOfBirth / 100);
  toTellcentury = yearOfBirth % 100;

  
  if (monthOfYear <= 2) {
    monthOfYear += 12;
    yearOfCentury -= 1;
    yearOfBirth -= 1;
  }

  // Split year to centuryCode & yearCode
  zeroBasedCentury = parseInt(yearOfBirth / 100);
  yearOfCentury = yearOfBirth % 100;

  let dayOfWeek =
    (dayOfMonth +
      parseInt(
@@ -72,15 +72,15 @@ function calculateWeekDay(birthDate) {
 */
function deriveAkanName() {
  let formData = fetchFormData();
  let userBirthDate, userGender, dayOfBirth;
  let userBirthDate, userGender, dayOfWeek;

  [userGender, ...userBirthDate] = formData;
  dayOfBirth = calculateWeekDay(userBirthDate);
  dayOfWeek = calculateWeekDay(userBirthDate);

  if (userGender === "Male") {
    alert("Your Akan Name is: " + maleAkanNames[dayOfBirth]);
    alert("Your Akan Name is: " + maleAkanNames[dayOfWeek]);
  } else {
    alert("Your Akan Name is: " + femaleAkanNames[dayOfBirth]);
    alert("Your Akan Name is: " + femaleAkanNames[dayOfWeek]);
  }
  </script>