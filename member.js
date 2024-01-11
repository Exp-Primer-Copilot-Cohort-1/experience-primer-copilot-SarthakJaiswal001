function skillsMember() {
  const member = document.getElementById("member");
  const memberSkills = document.getElementById("memberSkills");
  const memberSkillsClose = document.getElementById("memberSkillsClose");

  member.addEventListener("click", function () {
    memberSkills.classList.add("active");
  });

  memberSkillsClose.addEventListener("click", function () {
    memberSkills.classList.remove("active");
  });
}