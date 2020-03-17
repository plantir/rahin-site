<template>
  <section ref="wrapper">
    <v-layout row wrap>
      <v-flex xs10>
        <v-form-generator v-model="model" :formData="formData"></v-form-generator>
        <div>
          <v-btn color="info" @click="save">ذخیره</v-btn>
        </div>
      </v-flex>
      <v-flex xs2></v-flex>
    </v-layout>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator/types'
export default Vue.extend({
  props: {
    user: {
      default: {}
    }
  },
  data() {
    let formData: VRFormData = [
      {
        title: 'اطلاعات ورود به پنل',
        rows: [
          {
            label: 'شماره موبایل',
            type: 'textField',
            validation: { required: true },
            disabled: true,
            browserAutocomplete: 'new-password',
            placeholder: 'شماره موبایل را وارد نمایید',
            model: 'mobile'
          }
        ]
      },
      {
        title: 'اطلاعات عمومی:',
        rows: [
          {
            label: 'نام',
            validation: { required: true },
            type: 'textField',
            placeholder: 'نام را به فارسی وارد نمایید',
            model: 'name'
          },
          {
            label: 'نام خانوادگی',
            validation: { required: true },
            type: 'textField',
            placeholder: 'نام خانوادگی را به فارسی وارد نمایید',
            model: 'family'
          },
          {
            label: 'ایمیل',
            type: 'textField',
            validation: { email: true },
            placeholder: 'ایمیل را وارد نمایید',
            model: 'email'
          },
          {
            label: 'شماره ثابت',
            type: 'textField',
            placeholder: 'شماره ثابت را وارد نمایید',
            model: 'tel'
          },
          {
            label: 'تاریخ تولد',
            type: 'datePicker',
            appendIcon: 'event',
            placeholder: 'تاریخ تولد را وارد نمایید',
            model: 'birthday'
          },

          {
            label: 'جنسیت',
            type: 'radio',
            items: [
              { text: 'پسر', value: 'male' },
              { text: 'دختر', value: 'female', color: 'pink' }
            ],
            placeholder: 'جنسیت را وارد نمایید',
            model: 'gender'
          }
        ]
      }
    ]
    return {
      formData,
      model: this.user
    }
  },
  async mounted() {},
  methods: {
    async save() {
      let loader = this.$loader.show(this.$refs.wrapper)
      try {
        let { data } = await this.$service.user.update(this.model)
        this.$toast.success().showSimple('با موفقیت ذخیره شد')
        this.$emit('change', data)
      } catch (error) {
        this.$toast.error().showSimple('خطایی رخ داده است')
      }
      loader.hide()
    }
  }
})
</script>