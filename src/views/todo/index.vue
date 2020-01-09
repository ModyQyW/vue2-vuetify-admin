<template>
  <v-container>
    <v-alert type="warning" dense>
      You had better check <a href="https://github.com/SortableJS/Vue.Draggable">vuedraggable</a> for more usage.
    </v-alert>
    <v-row>
      <v-col sm="6">
        <v-draggable
          class="list-group white-container"
          tag="ul"
          v-model="data1"
          v-bind="options"
          :move="handleMove"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <transition-group type="transition" name="flip-list" class="transition-group">
            <li
              class="list-group-item"
              v-for="item in data1"
              :key="item.index"
            >
              <v-icon
                style="cursor: pointer;"
                @click="item.fixed = !item.fixed"
              >
                {{ item.fixed ? 'lock' : 'lock_open' }}
              </v-icon>
              {{ item.value }}
              <v-badge
                class="badge"
                :content="item.index"
              />
            </li>
          </transition-group>
        </v-draggable>
      </v-col>
      <v-col sm="6">
        <v-draggable
          class="list-group white-container"
          tag="ul"
          v-model="data2"
          v-bind="options"
          :move="handleMove"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <transition-group name="no" class="transition-group">
            <li
              class="list-group-item"
              v-for="item in data2"
              :key="item.index"
            >
              <v-icon
                style="cursor: pointer;"
                @click="item.fixed = !item.fixed"
              >
                {{ item.fixed ? 'lock' : 'lock_open' }}
              </v-icon>
              {{ item.value }}
              <v-badge
                class="badge"
                :content="item.index"
              />
            </li>
          </transition-group>
        </v-draggable>
      </v-col>
      <v-col sm="6">
        <v-btn @click="handleAddData(1)">ADD</v-btn>
        <v-btn @click="handleRemoveData(1)">REMOVE</v-btn>
      </v-col>
      <v-col sm="6">
        <v-btn @click="handleAddData(2)">ADD</v-btn>
        <v-btn @click="handleRemoveData(2)">REMOVE</v-btn>
      </v-col>
      <v-col sm="6">
        <pre class="white-container">{{ json1 }}</pre>
      </v-col>
      <v-col sm="6">
        <pre class="white-container">{{ json2 }}</pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VDraggable from 'vuedraggable'

export default {
  components: {
    VDraggable
  },
  data () {
    const mockdata = [
      'vue',
      'vuetify',
      'admin',
      'ModyQyW',
      '261857860@qq.com'
    ]
    return {
      mockdata,
      data1: mockdata.map((item, index) => ({
        value: item,
        index: index.toString(),
        fixed: false
      })),
      data2: [],
      isDragging: false,
      isDelayedDragging: false,
      options: {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    handleMove ({ relatedContext, draggedContext }) {
      const relatedItem = relatedContext.element
      const draggedItem = draggedContext.element
      return (
        (!relatedItem || !relatedItem.fixed) && !draggedItem.fixed
      )
    },
    handleAddData (number) {
      let tmp
      switch (number) {
        case 1:
          tmp = {
            value: this.mockdata[Math.floor(Math.random() * 5)],
            index: (this.data1.length + this.data2.length).toString(),
            fixed: false
          }
          this.data1.push(tmp)
          break
        case 2:
          tmp = {
            value: this.mockdata[Math.floor(Math.random() * 5)],
            index: (this.data1.length + this.data2.length).toString(),
            fixed: false
          }
          this.data2.push(tmp)
          break
        default: break
      }
    },
    handleRemoveData (number) {
      switch (number) {
        case 1:
          this.data1.pop()
          break
        case 2:
          this.data2.pop()
          break
        default:
          break
      }
    }
  },
  computed: {
    json1 () {
      return JSON.stringify(this.data1, null, 2)
    },
    json2 () {
      return JSON.stringify(this.data2, null, 2)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.isDelayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.isDelayedDragging = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.white-container {
  background-color: #fff;
}

.transition-group {
  min-height: 180px;
  margin-left: -24px;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  background: #c8ebfb;
  opacity: .5;
}

.list-group {
  width: 100%;
  min-height: 180px;

  & > span {
    display: block;
    min-height: 36px;
  }

  & .list-group-item {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 36px;
    padding-left: 4px;
    list-style-type: none;
    cursor: move;
    border: 1px solid #000;
    border-bottom: 0;

    &:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-child {
      border-bottom: 1px solid #000;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    & > .badge {
      position: absolute;
      right: 4px;
    }
  }
}

</style>
