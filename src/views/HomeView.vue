<template>
  <div class="home">
    <nav-bar-page/>
      <header-page/>
      <SkillsComponent/>
      <project-folio/>
      <skills-list/>
      <footer-page/>
  </div>
</template>

<script>
import NavBarPage from '@/components/NavBarPage.vue'
import HeaderPage from "@/components/HeaderPage.vue"
import SkillsComponent from '@/components/SkillsComponent.vue'
import ProjectFolio from "@/components/ProjectFolio"
import SkillsList from "@/components/SkillsList"
import FooterPage from '@/components/FooterPage.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    NavBarPage,
    HeaderPage,
    SkillsComponent,
    ProjectFolio,
    SkillsList,
    FooterPage
    
  }
}
</script>
