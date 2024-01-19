<template>
  <div>
<h3> Students grades </h3>


<div class="container">
    <table>
      
      <th>St.Code</th>
      <th>Homework 1</th>
      <th>Homework 2</th>
      <th>Exam</th>
      <th>Final Grade</th>
      
      <tr v-for="student in grades">
      
      <td>{{ student.studentcode }}</td>
      <td>{{ student.hw1 }}</td>
      <td>{{ student.hw2 }}</td>
      <td>{{ student.exam }}</td>
      <td>{{ student.final }}</td>
      </tr>
    </table>
</div>
</div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
  },
  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}

table {
  margin-left:auto;
  margin-right:auto;
  background-color: rgba(128, 128, 128, 0.373);
}
</style>
