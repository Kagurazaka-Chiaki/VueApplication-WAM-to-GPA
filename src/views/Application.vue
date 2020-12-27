<template>
  <div>
    <form v-on:submit.prevent="AddNewCourse">
      <label for="edit-course"> Course is: </label>
      <input v-model="NewCourse" placeholder="Edit Course Name" />
      &emsp;
      <label for="edit-wam"> WAM is: </label>
      <input v-model="NewWAM" placeholder="Edit WAM" />
      &emsp;
      <label for="edit-uoc"> UoC is: </label>
      <input v-model="NewUoC" placeholder="Edit UoC" />
      &emsp; <button>添加课程</button>
    </form>
    <ul>
      <RemoveCourse
        v-for="(course, index) in courses"
        :key="course.id"
        :name="course.name"
        :wam="course.wam"
        :uoc="course.uoc"
        @remove="courses.splice(index, 1)"
      ></RemoveCourse>
    </ul>
    {{ gpa }} &emsp; <button v-on:click="Calculate">计算等效 GPA</button>
  </div>
</template>

<script>
import RemoveCourse from "@/components/RemoveCourse.vue";

export default {
  name: "Application",
  components: { RemoveCourse },
  methods: {
    AddNewCourse: function () {
      var wam = parseFloat(this.NewWAM);
      var uoc = parseInt(this.NewUoC);
      this.courses.push({
        id: this.NextCourseId++,
        name: this.NewCourse,
        wam: wam,
        uoc: uoc,
      });
    },
    Calculate: function () {
      let distinction = 0;
      let credit = 0;
      let pass = 0;
      let fail = 0;
      let completed = 0;
      for (let i = 0; i < this.courses.length; i++) {
        completed = completed + this.courses[i].uoc;
        if (this.courses[i].wam >= 75) {
          distinction = distinction + this.courses[i].uoc;
        } else if (this.courses[i].wam >= 65) {
          credit = credit + this.courses[i].uoc;
        } else if (this.courses[i].wam >= 50) {
          pass = pass + this.courses[i].uoc;
        } else {
          fail = fail + this.courses[i].uoc;
        }
      }
      this.gpa = (4 * distinction + 3 * credit + 2 * pass) / completed;
    },
  },
  data() {
    return {
      gpa: "",
      NewWAM: "",
      NewUoC: "",
      NewCourse: "",
      courses: [],
      NextCourseId: 2,
    };
  },
};
</script>

<style></style>
