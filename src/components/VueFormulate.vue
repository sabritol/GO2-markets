<template>
  <div>
    <h1>A little about you</h1>
    <p> Please fill some of the basics details to get started.</p>
    <FormulateForm v-model="formValues" @submit="handleSubmit" >
      <FormulateInput name="name" placeholder="First Name" validation="required" label-class= "first-name"/>
      <FormulateInput name="lastname" placeholder="Last Name" validation="required" label-class= "last-name" />
      <!-- <vuePhoneNumberInput v-model="VuePhoneNumberInput" />  -->
       <!-- <FormulateInput v-model="VuePhoneNumberInput"/> -->
               

<!-- 
  <FormulateInput
  v-model="value"
  :options="{first: 'Buyer', second: 'Seller'}"
  type="radio"
  label="Select your role"
/> -->
<h3>Select your role</h3>
<p> Choose a role that better defines you. </p>
<FormulateInput
  v-model="value"
  type="radio"
  label="Buyer"
  style=""
/>

<FormulateInput
  v-model="value"
  type="radio"
  label="Seller"
/>
      
      <FormulateInput type="submit" label="Submit" />
    </FormulateForm>
    <h3>Values:</h3>
    {{formValues}}
    {{VuePhoneNumberInput}}
  </div>
</template>

<script>
export default {
  data: () => ({
    formValues: {},
    VuePhoneNumberInput: {}
  }),
  methods: {
    handleSubmit() {
        console.log(this.formValues)
    }
  }
  };

</script>

<style scoped>
h1 {
position: static;
width: 268px;
height: 42px;
left: 0px;
top: 0px;
font-family: Work Sans;
font-style:inherit;
font-weight: 600;
font-size: 36px;
line-height: 42px;
text-align: right;
letter-spacing: -0.06em;
color: #242424;
font-family: 'Work Sans', sans-serif;}
p { position: static;
width: 264px;
height: 48px;
left: 0px;
top: 50px;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.06em;
color: #242424;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
}
h3 {
  position: static;
width: 138px;
height: 23px;
left: 0px;
top: 0px;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
text-align: right;
letter-spacing: -0.06em;
color: #242424;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 8px;
}

</style>

