<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="home">首頁</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!---->
              <router-link class="nav-link active" to="/home">home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/Dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/router_test"
                >router_test</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/datapage"
                >資料測試</router-link
              >
            </li>
             <li class="nav-item">
              <router-link class="nav-link active" to="/form"
                >表單填寫</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/emit"
                >Emit</router-link
              >
            </li>
          </ul>

           <ul class="navbar-nav ms-auto text-end">
              <li class="nav-item">
              <router-link class="nav-link active" to="/emit"
                >購物車
                </router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
