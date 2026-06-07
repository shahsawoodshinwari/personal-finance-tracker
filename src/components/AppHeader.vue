<template>
  <div class="container  rounded-3 p-4 ">

    <!--- Hero Section --->
    <div class="card bg-dark p-4 mb-4 text-white  card-hover">
      <h2 class="text-center fw-bold ">About <span class="text-primary">Personal</span> Finance Tracker</h2>
      <p class="text-center">
        This app helps you manage your income and expenses easily and track your financial activities.
      </p>
    </div>

    <!--  Purpose -->
    <div class="card bg-dark p-4 mb-4 text-white card-hover">
      <h4>Purpose</h4>
      <p>
        This application is built to help students and beginners manage their daily finances.
        You can track your expenses, income and improve your savings.
      </p>
    </div>

    <!-- Features -->
    <div class="card bg-dark p-4 mb-4 text-white card-hover">
      <h4>Features</h4>
      <ul>
        <li>Add and manage transactions</li>
        <li>Track income and expenses</li>
        <li>Filter transactions </li>
        <li>Automatic balance calculation</li>
        <li>Simple and clean UI</li>
      </ul>
    </div>

    <!--  How it Works -->
    <div class="card bg-dark p-4 mb-4 text-white card-hover">
      <h4>How it Works</h4>
      <ol>
        <li>Add a transaction</li>
        <li>Select type (Income / Expense)</li>
        <li>Choose category</li>
        <li>Save data</li>
        <li>View updated balance</li>
      </ol>
    </div>

    <!--  Developer -->
    <div class="card bg-dark p-4 mb-4 text-white card-hover">
      <h4>About Developer</h4>
      <p>
        My name is <b>Muhammad Sajjad</b>. I am a BS Computer Science student.
        I am passionate about web development and building useful applications.
      </p>
    </div>

    <!--  Technologies -->
    <div class="card bg-dark p-4 mb-4 text-white card-hover">
      <h4>Technologies Used</h4>
      <ul>
        <li>Vue.js</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
      </ul>
    </div>

    <!--  Future Improvements -->
    <div class="card bg-dark p-4 mb-4 text-white card-hover">
      <h4> Future Improvements</h4>
      <ul>
        <li>Charts & Graphs</li>
        <li>User Login System</li>
        <li>Export Data (PDF/Excel)</li>
      </ul>
    </div>

    <!--  Footer  -->
    <div class="text-center mt-4 mb-5 text-white card-hover">
      <h5>Start tracking your finances today</h5>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutView',

  mounted() {

  }
}

</script>
<style>
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}
</style>
