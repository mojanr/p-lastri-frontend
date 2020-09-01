import React, { memo, FunctionComponent, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageTransitionComponentProps {
  children: string | ReactNode
  direction: "vertical" | "horizontal"
}

const VerticalVariants = {
  hidden: {
    y: 24,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      easings: "easeInOut",
      duration: 0.3
    }
  },
  exit: {
    y: 24,
    opacity: 0,
    transition: {
      easings: "easeInOut",
      duration: 0.1
    }
  }
}

const HorizontalVariants = {
  hidden: {
    x: 24,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      easings: "easeInOut",
      duration: 0.3
    }
  },
  exit: {
    x: 24,
    opacity: 0,
    transition: {
      easings: "easeInOut",
      duration: 0.1
    }
  }
}

const PageTransitionComponent: FunctionComponent<PageTransitionComponentProps> = ({
  children,
  direction
}) => {
  return (
    <motion.div
      variants={direction === "vertical" ? VerticalVariants : HorizontalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default memo(PageTransitionComponent)
