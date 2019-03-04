<template>
  <div>
   <div class="hello">
    <el-form :model="ruleForm2" status-icon  :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass" required >
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
 </div>
</template>

<script>

 import {isDecimal} from "../utils/validate.js"
  export default {
    data() {
      return {
        ruleForm2: {
          pass: '',
        },
        rules2: {
          pass: [{ validator:isDecimal, trigger: 'blur' }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang='scss' scoped>
  .hello{
    width:40%;
  }
</style>
