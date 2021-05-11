import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <footer class="bg-light text-center text-lg-start">
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const styles = StyleSheet.create({});
