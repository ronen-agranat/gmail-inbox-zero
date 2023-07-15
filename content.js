const findTextNode = (element, text) => {
    for (let child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() === text)
        return child;
      const textNode = findTextNode(child, text);
      if (textNode) return textNode;
    }
    return null;
  };
  
  const checkMail = setInterval(() => {
    const noNewMailTextNode = findTextNode(document.body, "No new mail!");
    if (noNewMailTextNode) {
      noNewMailTextNode.textContent = "You're all caught up! 🎉 Time to relax 😎";
    }
  }, 300);