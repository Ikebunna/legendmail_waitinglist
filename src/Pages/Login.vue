<script>
export default {
  data() {
      return {
          form: {
              fullName: '',
              email: '',
              phone: '',
              invite: '',
          },
          options: [
            'I need free cloud storage',
            'I want email and payments in one place',
            'I want to support a Nigerian-made platform',
            'I want a better email alternative'
          ],
          selectedOption: '',
          showDropdown: false,
      };
  },
  methods: {
      toggleDropdown() {
          this.showDropdown = !this.showDropdown;
      },
      selectOption(option) {
          this.selectedOption = option;
          this.showDropdown = false;
      },
      submitForm() {
          alert('Form submitted');
      },
  },
};
</script>

<template>
  <div class="relative flex flex-col md:flex-row p-6 min-h-screen items-center justify-center bg-cover bg-center">
      <!-- Background Image -->
      <img src="../assets/background.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover " />
      
      <div class="w-full md:w-1/2 p-6 mb-[30px] relative z-10">
          <div class="flex items-center mb-4">
              <img src="../assets/logo.png" alt="LegendMail Logo" class="h-full" />
          </div>
          <h2 class="text-3xl font-bold mt-[35px]">Be Among the First to Experience Nigeria’s First-of-Its-Kind Email Service</h2>
          <p class="mt-[30px]">Email should be more than just an inbox. With LegendMail, you get:</p>
          <ul class="mt-[30px] space-y-5">
              <li class="flex items-center">
                  <img src="../assets/Transaction.png" alt="Transaction" class="w-5 h-5 mr-2" />
                  Seamless transactions within your inbox using MailPay
              </li>
              <li class="flex items-center">
                  <img src="../assets/Cloud-Storage.png" alt="Cloud Storage" class="w-5 h-5 mr-2" />
                  Email, cloud storage, and payments—all in one place
              </li>
              <li class="flex items-center">
                  <img src="../assets/Frame7.png" alt="Secure" class="w-5 h-5 mr-2" />
                  A single hub to manage all your digital services
              </li>
              <li class="flex items-center">
                  <img src="../assets/Secure.png" alt="Vault" class="w-5 h-5 mr-2" />
                  20 GB free cloud storage with Legend Vault
              </li>
          </ul>
          <p class="mt-[30px] font-semibold">Sign up now for exclusive early access and be among the first to experience the future of email.</p>
      </div>
      
      <div class="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg bg-opacity-80 relative z-10">
          <form @submit.prevent="submitForm">
              <label class="block mb-2">Full Name</label>
              <input type="text" class="w-full p-2 border bg-white bg-opacity-30 rounded mb-6" v-model="form.fullName" />
  
              <label class="block mb-2">Email Address</label>
              <input type="email" class="w-full p-2 border rounded bg-white bg-opacity-30 mb-6" v-model="form.email" />
  
              <label class="block mb-2">Phone Number (Optional)</label>
              <input type="text" class="w-full p-2 border rounded bg-white bg-opacity-30 mb-6" v-model="form.phone" />
  
              <label class="block mb-4">Why are you excited about LegendMail?</label>
              <div class="relative">
                  <div class="w-full p-2 border rounded mb-6 cursor-pointer flex justify-between items-center" @click="toggleDropdown">
                      {{ selectedOption ? selectedOption : 'Select an option' }}
                      <img src="../assets/Arrow.png" alt="Dropdown Arrow" class="w-3 h-2 ml-2" />
                  </div>
                  <ul v-if="showDropdown" class="absolute w-full bg-white  border rounded shadow-lg z-10">
                      <li v-for="option in options" :key="option" class="p-2 hover:bg-gray-200 cursor-pointer" @click="selectOption(option)">
                          {{ option }}
                      </li>
                  </ul>
              </div>
  
              <label class="block mb-4">Would you like to invite friends and earn rewards?</label>
              <div class="flex gap-[80px] mb-[30px]">
                  <label class="flex items-center">
                      <span class="mr-3">Yes</span>
                      <input type="radio" value="yes" v-model="form.invite" class="appearance-none w-6 h-6 border-2 border-gray-500 rounded-md checked:bg-green-500 checked:border-green-300 relative" />
                      <span v-if="form.invite === 'yes'" class="absolute w-6 h-6 flex items-center justify-center text-white"></span>
                  </label>
                  <label class="flex items-center">
                      <span class="mr-3">No</span>
                      <input type="radio" value="no" v-model="form.invite" class="appearance-none w-6 h-6 border-2 border-gray-500 rounded-md checked:bg-green-500 checked:border-green-300 relative" />
                      <span v-if="form.invite === 'no'" class="absolute w-6 h-6 flex items-center justify-center text-white"></span>
                  </label>
              </div>
  
              <button type="submit" class="w-64 mx-auto flex justify-center items-center bg-orange-500 text-white p-2 rounded hover:bg-orange-600">Sign Up</button>
          </form>
      </div>
  </div>
</template>

<style scoped>
input, button, div {
  transition: all 0.2s ease;
}
</style>